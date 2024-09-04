/* eslint-disable react/prop-types */
const Header = ({ title }) => {
    return (
      <>
        <h1
          style={{
            border: "1px solid grey",
            padding: 10,
            backgroundImage:
              "linear-gradient(to right, #8ad16b, #70dfa9, #7ae9db, #a6eef8, #d8f2ff, #d5eaff, #e2dfff, #f8d1fc, #ffa6e0, #ff75ad, #ff3d66, #ff0000)"
          }}
        >
          {title}
        </h1>
        <img
          alt="pizza logo"
          style={{ width: 200 }}
          src="https://thumbs.dreamstime.com/b/italian-chef-pizza-pizzaiolo-vector-illustration-label-packaging-menu-design-etc-184576035.jpg"
        />
      </>
    );
  };
  
  export default Header;