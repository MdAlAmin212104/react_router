
const User = ({user}) => {
      const {id, email, phone, name} = user;
      const userStyle = {
            border: '2px solid yellow',
            padding: '15px',
            borderRadius: '15px',
            marginTop: '29px',
      }
      return (
            <div style={userStyle}>
                  <h2>Name {name}</h2>
                  <h5>Email {email}</h5>
                  <p>Phone : {phone}</p>
                  
            </div>
      );
};

export default User;