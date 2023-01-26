import React, {Component} from 'react';
import {render} from 'react-dom';
import {
  SortableElement,
  SortableHandle,
} from 'react-sortable-hoc';
import arrayMove from 'array-move';



const DragHandle = SortableHandle(() => <span>≡</span>);

interface WaitingListItemProps {
  title: string;
  url: string;
}

const WaitingListItem = SortableElement(({title, url}:WaitingListItemProps) => (
  <li className="c-waiting-list__item">
    <button className="c-waiting-list__btn">=</button>
    <p className="c-waiting-list__title">{title}</p>
    <a href={url} className="c-waiting-list__url">{url}</a>
    <button className="c-waiting-list__btn">X</button>
  </li>
));

export default WaitingListItem;