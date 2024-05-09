import { useState } from "react";
import Counter from "./Counter";
import {ReactComponent as SpinnerSVG} from '../SVGs/spinner.svg';
import {ReactComponent as HeartSVG} from '../SVGs/tigerh-filled.svg';
import Maps from "./Maps";

function TeachDocForm(props) {
    const [loading, setLoading] = useState(false);

    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!loading) {
            setLoading(true);
            await timeout(2000);
            setLoading(false);
            if(props.profile === true) {
                props.setConfirm(true);
            }
            else {
                props.setStep(2);
            }
        }
    }

    return(
        <>
            {props.confirm !== true ?
            <div>
                {props.form === "teacher" &&
                <div>
                    {props.profile === true && <h2 className="text-xl text-center font-semibold mb-2">Teacher Verification Form</h2>}
                    <h2 className="text-lg font-semibold mb-1">Job Information</h2>
                    <label className='label'>Subject
                        <input type="text" value={props.teacherData.subject} placeholder="Type here..." className="text-input"
                            onChange={(e) => props.handleTeacherChange("subject", e.target.value)} />
                    </label>
                    <label className='label'>Number of pro-bono classes you can teach a month
                        <Counter val={props.teacherData.numCases} setter={props.handleTeacherChange} valName="numCases" />
                    </label>
                    
                    <hr className='border-t-2 my-4' />
                    <h2 className="text-lg font-semibold mb-1">Teaching Post Location</h2>
                    <label className='label'>Address
                        <input type="text" value={props.teacherData.address} placeholder="Type here..." className="text-input"
                        onChange={(e) => props.handleTeacherChange("address", e.target.value)} />
                    </label>
                    <div className="grid grid-cols-2 gap-x-4">
                        <label className='label'>Area
                            <input type="text" value={props.teacherData.area} placeholder="Type here..." className="text-input"
                            onChange={(e) => props.handleTeacherChange("area", e.target.value)} />
                        </label>
                        <label className='label'>Governorate
                            <input type="text" value={props.teacherData.governorate} placeholder="Type here..." className="text-input"
                            onChange={(e) => props.handleTeacherChange("governorate", e.target.value)} />
                        </label>
                    </div>
                    <label className="label"> Exact maps location
                        <div className= "w-full h-96 rounded-md m-2 pr-4">
                                <Maps isStaticMap={false} Location={"Set"}/>
                        </div>
                    </label>

                </div>
                }
                {props.form === "doctor" &&
                <div>
                    {props.profile === true && <h2 className="text-xl text-center font-semibold mb-2">Doctor Verification Form</h2>}
                    <h2 className="text-lg font-semibold mb-1">Job Information</h2>
                    <label className='label'>Specialty
                        <input type="text" value={props.doctorData.specialty} placeholder="Type here..." className="text-input"
                            onChange={(e) => props.handleDoctorChange("specialty", e.target.value)} />
                    </label>
                    <label className='label'>Number of pro-bono cases you can take a month
                        <Counter val={props.doctorData.numCases} setter={props.handleDoctorChange} valName="numCases" />
                    </label>

                    <hr className='border-t-2 my-4' />
                    <h2 className="text-lg font-semibold mb-1">Clinic Location</h2>
                    <label className='label'>Address
                        <input type="text" value={props.doctorData.address} placeholder="Type here..." className="text-input"
                        onChange={(e) => props.handleDoctorChange("address", e.target.value)} />
                    </label>
                    <div className="grid grid-cols-2 gap-x-4">
                        <label className='label'>Area
                            <input type="text" value={props.doctorData.area} placeholder="Type here..." className="text-input"
                            onChange={(e) => props.handleDoctorChange("area", e.target.value)} />
                        </label>
                        <label className='label'>Governorate
                            <input type="text" value={props.doctorData.governorate} placeholder="Type here..." className="text-input"
                            onChange={(e) => props.handleDoctorChange("governorate", e.target.value)} />
                        </label>
                    </div>
                    <label className="label"> Exact maps location
                        <div className= "w-full h-96 rounded-md m-2 pr-4">
                                <Maps isStaticMap={false} Location={"Set"}/>
                        </div>
                    </label>
                </div>
                }
                <hr className='border-t-2 my-4' />
                <h2 className="text-lg font-semibold mb-1">Qualifications</h2>
                <label className='label' htmlFor="pdf">CV
                    <input id="pdf" type="file" name="pdf" accept="application/pdf" className="block w-max cursor-pointer mt-1 mb-3" 
                    onChange={props.handleFileChange}/>
                </label>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className='submit-btn w-[80px] h-[32px]'
                        onClick={handleSubmit}
                        disabled={(props.form === "teacher" && (Object.values(props.teacherData).includes("") || props.teacherData.numCases === 0))
                                    || (props.form === "doctor" && (Object.values(props.doctorData).includes("") || props.doctorData.numCases === 0))
                                    || props.file === undefined}>
                        {loading ? <SpinnerSVG className="w-full"/> : "Submit"}
                    </button>
                </div>
            </div>
            :
            <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="text-2xl font-bold">Your request has successfully<br/>been submitted!</h2>
                <HeartSVG className="w-60" />
                <p className="font-medium">You may use the website as a regular donor until your request is verified. We'll get back to you in 1-2 weeks.</p>
                <p className="font-medium">Thank you for using donate<span className="font-sans">لي</span></p>
                <p className="underline cursor-pointer -mt-4 italic ml-1" onClick={() => props.setPage("donations")}>
                    Continue browsing
                </p>
            </div>
            }
        </>
    );
}
export default TeachDocForm;