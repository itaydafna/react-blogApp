import {Component} from 'react';

export const Pager = ({showOlderPosts}) => (
    <ul className="pager">
        <li className="previous"
            onClick={showOlderPosts}>
            <a href="#">← Older</a>
        </li>
        <li className="next">
            <a href="#">Newer →</a>
        </li>
    </ul>
);
