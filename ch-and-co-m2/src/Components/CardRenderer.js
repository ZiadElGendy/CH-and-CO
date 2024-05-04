import DonationCard from "./DonationCard";

function CardRenderer({currentCardSet})  {
    return currentCardSet.map((card) => {
        return (
            <DonationCard
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                tags={card.tags}
                imgURL={card.imgURL}
            />
        );
    });
};

export default CardRenderer;