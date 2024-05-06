import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

function Filter({ filteringOptions, setFilteringOptions, data, setCurrentCardSet }) {
    const [categoriesArray, setCategoriesArray] = useState([]);
    const [checkedCategories, setCheckedCategories] = useState([]);
    const [appliedFilters, setAppliedFilters] = useState({});
    const [searchQuery, setSearchQuery] = useState("");

    const handleCategoryCheckboxChange = (category, isChecked) => {
        if (isChecked) {
            setAppliedFilters(prevFilters => ({
                ...prevFilters,
                [category]: {}
            }));
            setCheckedCategories([...checkedCategories, category]);
        } else {
            setAppliedFilters(prevFilters => {
                const updatedFilters = { ...prevFilters };
                delete updatedFilters[category];
                return updatedFilters;
            });
            setCheckedCategories(checkedCategories.filter((item) => item !== category));
        }
    };

    useEffect(() => {
        setCategoriesArray(parseData(data));
    }, [data]);

    useEffect(() => {
        applyFilters();
    }, [appliedFilters, searchQuery]);

    function parseData(data) {
        const categoriesObj = {};
        data.forEach(item => {
            const { type, ...tags } = item.tags;
            if (!categoriesObj[type]) {
                categoriesObj[type] = {};
            }
            Object.keys(tags).forEach(tag => {
                if (!categoriesObj[type][tag]) {
                    categoriesObj[type][tag] = [];
                }
                if (!categoriesObj[type][tag].includes(tags[tag])) {
                    categoriesObj[type][tag].push(tags[tag]);
                }
            });
        });
        const categoriesArray = Object.keys(categoriesObj).map(category => ({
            category,
            parameters: categoriesObj[category]
        }));
        return categoriesArray;
    }

    const handleFilterChange = (selectedOptions, category, param) => {
        console.log(selectedOptions, category, param);
        const values = selectedOptions ? selectedOptions.map(option => option.value) : [];
        setAppliedFilters(prevFilters => ({
            ...prevFilters,
            [category]: {
                ...prevFilters[category],
                [param]: values 
            }
        }));
    };

    function applyFilters() {
        let filteredData;
        if (checkedCategories.length === 0) {
            filteredData = data;
        } else {
            filteredData = data.filter(item => {
                return checkedCategories.includes(item.tags.type) &&
                    Object.entries(appliedFilters[item.tags.type] || {}).every(([param, values]) => {
                        return values.length === 0 || values.includes(item.tags[param]);
                    });
            });
        }

        if (searchQuery.trim() !== "") {
            filteredData = filteredData.filter(item =>
                Object.entries(item).some(([key, value]) =>
                    key !== 'imgURL' && typeof value === 'string' && value.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        }
    

        setCurrentCardSet(filteredData);
    }
    

    function renderCategories(categories, checkedCategories) {
        return (
            <div className="bg-farahgreen-100 p-3 rounded-md flex flex-col gap-2 w-64 shadow-md">
                {categories.map((category, index) => (
                    <div className="bg-white py-2 px-4 rounded-md" key={index}>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id={`category-${index}`}
                                checked={checkedCategories.includes(category.category)}
                                onChange={(e) => handleCategoryCheckboxChange(category.category, e.target.checked)}
                                className="mr-2 accent-farahgray-700"
                            />
                            <label htmlFor={`category-${index}`} className="font-medium">{category.category}</label>
                        </div>
                        {checkedCategories.includes(category.category) && (
                            <div className="flex flex-col gap-4 mt-4 pb-4">
                                {Object.entries(category.parameters).map(([param, values]) => (
                                    <div key={param}>
                                        <label className="block font-medium" htmlFor={param}>{param}</label>

                                        <Dropdown
                                            options={values.map((value) => ({ value, "label": value }))}
                                            onChange={(selectedOption) => handleFilterChange(selectedOption, category.category, param)}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mt-4 mb-2 px-3 py-2 w-64 rounded-md border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {renderCategories(categoriesArray, checkedCategories)}
        </div>
    );
}

export default Filter;
