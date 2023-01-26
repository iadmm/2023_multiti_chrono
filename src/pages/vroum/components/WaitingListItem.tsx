interface WaitingListItemProps {
  title: string;
  url: string;
}

const WaitingListItem = ({ title, url } :WaitingListItemProps) => (
  <li className="c-waiting-list__item">
    <button className="c-waiting-list__btn">=</button>
    <p className="c-waiting-list__title">{title}</p>
    <a href={url} className="c-waiting-list__url">{url}</a>
    <button className="c-waiting-list__btn">X</button>
  </li>
);

export default WaitingListItem;