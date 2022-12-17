const CustomPagination = () => {
    return (
        <div className="pagination-wrap">
            <ul>
                <li className="prev">
                    <a href="shop.html">قدیمی تر</a>
                </li>
                <li>
                    <a href="shop.html">1</a>
                </li>
                <li className="active">
                    <a href="shop.html">2</a>
                </li>
                <li>
                    <a href="shop.html">3</a>
                </li>
                <li>
                    <a href="shop.html">4</a>
                </li>
                <li>
                    <a href="shop.html">...</a>
                </li>
                <li>
                    <a href="shop.html">10</a>
                </li>
                <li className="next">
                    <a href="shop.html">جدیدتر</a>
                </li>
            </ul>
        </div>
    );
};

export default CustomPagination;
