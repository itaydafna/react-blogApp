export const PostPreview = ({
    title,
    author,
    date,
    description,
    tags

}) => {

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
    
    return (
        <article>
            <header>
                <h2>
                    <a href="#">{title}</a>
                </h2>
                <p>
                    <small className="glyphicon glyphicon-user"/>
                    by <a href="#">{author}</a>
                </p>
                <p>
                    <small className="glyphicon glyphicon-time"/>
                    Posted on {date.getDate()} {monthNames[date.getMonth()]}, {date.getFullYear()}
                </p>
            </header>
            {/* Post Description */}
            <p>{description}</p>
            <br />
            <footer className="clearfix">
                <p className="pull-left">
                    <b>Tags:&nbsp;</b>
                    {tags.map((tag)=>(
                        <span key={tag}>
                            <a href="#" className="label label-default">{tag}</a>
                        </span>
                    ))}
                </p>
                <a className="btn btn-primary pull-right" href="#">
                    Read More <i className="glyphicon glyphicon-chevron-right"/>
                </a>
            </footer>
            <hr />
        </article>
    )

};
