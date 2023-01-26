import WaitingListItem from "./WaitingListItem";

interface SlideItem {
  title: string;
  value: string;
  _id: string;
}

interface WaitingListProps {
  items: SlideItem[];
}

const WaitingList = ({ items }:WaitingListProps) => (
  <ul className="c-waiting-list o-list-bare">
    {items.map((item) => (
      <WaitingListItem
        key={item._id}
        title={item.title}
        url={item.value}
      />
    ))}
  </ul>
);

export default WaitingList;