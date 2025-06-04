import CardBrowser from "@/components/CardBrowser/CardBrowser";
import cards from "@/data/cards.json";

export default function Cards() {
    return <CardBrowser cards={cards} />;
}
