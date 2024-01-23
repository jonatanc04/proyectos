export const Landing = () => <h2>LANDING PAGE (PUBLIC)</h2>
export const Home = ({user}) => {
    console.log(user);
    return <h2>HOME PAGE (PRIVATE)</h2>
}
export const Dashboard = () => <h2>DASHBOARD PAGE (PRIVATE)</h2>
export const Analytics = () => <h2>ANALYTICS PAGE (PRIVATE, PERMISSION: 'analize')</h2>
export const Admin = () => <h2>ADMIN PAGE (PRIVATE, ROL: 'admin')</h2>