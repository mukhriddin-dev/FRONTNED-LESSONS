import "./style.scss"

const index = () => {
    return (
        <footer className="bg-indigo-800 p-3">
            <p className="text-center text-white">
                &copy; {new Date().getFullYear() } DASHBOARD. All rights reserved.  |  <a href="#">Privacy Policy</a> |  <a href="#">Terms of Service</a>
            </p>
        </footer>
    );
};

export default index;