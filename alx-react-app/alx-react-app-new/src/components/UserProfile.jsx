function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '15px', margin: '15px', borderRadius: '8px', maxWidth: '300px' }}>
      <h2 style={{ color: 'blue', fontSize: '1.8em', marginBottom: '5px' }}>{props.name}</h2>
      <p style={{ fontSize: '1em', margin: '5px 0' }}>
        Age: <span style={{ fontWeight: 'bold', color: 'darkred' }}>{props.age}</span>
      </p>
      <p style={{ fontSize: '1em', margin: '5px 0', fontStyle: 'italic', color: 'gray' }}>
        Bio: {props.bio}
      </p>
    </div>
  );
}

export default UserProfile;
