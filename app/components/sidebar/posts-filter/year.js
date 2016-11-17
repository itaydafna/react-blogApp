import {Component} from 'react';
import {Filter} from './filter';

export const Year = ({year,months,filterTerm, pathPrefix}) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return(
        <div>
              <span className="list-group-item disabled">
                  {year}
              </span>
            {months.map((month)=>
                <Filter
                    pathPrefix = {pathPrefix}
                    key={month[0]}
                    category={monthNames[month[0]]}
                    count={month[1]}
                    queryVar = {`month`}
                    queryVal = {`${monthNames[month[0]].toLocaleLowerCase()}-${year}`}
                    filterTerm={filterTerm}
                />)}
        </div>
    )
};
