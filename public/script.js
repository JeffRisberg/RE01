class UserList extends React.Component {
    constructor() {
        super();

        this.userList = [
            {"fname": "Sara", "lname": "Smith"},
            {"fname": "Dave", "lname": "Stone"},
            {"fname": "John", "lname": "Jones"},
            {"fname": "Kate", "lname": "Tread"}
        ];

        this.addUser = this.addUser.bind(this);
    }

    componentDidMount() {
        this.setState({user: ""});
    }

    updateUser(e) {
        console.log("fname = " + e.target.value);
    }

    addUser() {
        var fname = this.refs.fname.value;
        var lname = this.refs.lname.value;
        var entry = {fname: fname, lname: lname};
        this.setState({user: entry});
        this.userList.push(entry);
    }

    render() {
        return (
            <div>
                <ul>
                    <ListOptions options={this.userList}/>
                </ul>
                <input ref="fname" type="text" onChange={this.updateUser}/>
                <input ref="lname" type="text"/>
                <button onClick={this.addUser}>Add User</button>
            </div>
        )
    }
}

class ListOptions extends React.Component {
    render() {
        return (
            <div>
                {this.props.options.map(function (entry, index) {
                    return (
                        <li key={index}>{entry.fname} {entry.lname}</li>
                    )
                })}
            </div>
        )
    }
}

ReactDOM.render(
    <UserList/>,
    document.getElementById('container')
);

