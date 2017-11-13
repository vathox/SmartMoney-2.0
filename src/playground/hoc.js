import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
      <h1>Info</h1>
      <p>The info is: {props.info}</p>
  </div>
);


const withAdminWaring =  (WrappedComponent) => {
    return (props) => (
      <div>
          {props.isAdmin && <p>This is private data, DO NOT SHARE</p>}
          <WrappedComponent {...props} />
      </div>
    );
};

const requireAuthentication = (WrappedComponent) =>{
    return(props) =>(
      <div>
          {props.isAuthenticated && <WrappedComponent {...props}/>}
          <p>Please log in to view the content</p>
      </div>
    );
};

const AdminInfo = withAdminWaring(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="secret info" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="secret info" />, document.getElementById('app'));