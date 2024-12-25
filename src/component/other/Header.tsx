import React from "react";

interface HeaderProps {
    changeUser: (user: string) => void;
    data: { firstName: string } | null;
}

const Header: React.FC<HeaderProps> = (props) => {
    // Check if user data exists and set username
    const username = props.data ? props.data.firstName : "Admin";

    const logOutUser = () => {
        localStorage.setItem("loggedInUser", "");
        console.log(props.changeUser);
        props.changeUser(""); // Reset user state
        // window.location.reload(); // Uncomment if you want to reload the page after logging out
    };

    return (
        <div className="flex flex-wrap items-end justify-between text-white p-4 ">
            <h1 className="text-xl font-medium sm:text-2xl">
                Hello <br />
                <span className="text-2xl font-semibold sm:text-3xl">{username}👋</span>
            </h1>
            <button
                onClick={logOutUser}
                className="bg-red-600 text-sm font-medium px-4 py-2 rounded sm:text-lg sm:px-6 sm:py-3"
            >
                Log out
            </button>
        </div>
    );
};

export default Header;
