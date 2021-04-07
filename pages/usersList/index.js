import styles from '../../styles/UsersList.module.css'

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { getAllUsers: data },
  };
};

const UsersList = ({ getAllUsers }) => {
  return (
    <div>
      <h1>All users</h1>
      {getAllUsers.map((user) => (
        <div key={user.id}>
          <a className={styles.single}>{user.name}</a>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
