import Header from '~/components/Layout/components/Header';

// chứa all layout hiện tại
// content động truyền từ ngoài vào -> children
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
