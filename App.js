const Header = (props) => {
    const activeDishes = props.dishes.filter(dish => dish.active)
    const activeDishesNumber = activeDishes.length
    return (
        <>
            <h2>Wielkość zamówienia: {activeDishesNumber}</h2>
            <h2>Do zapłaty: {activeDishesNumber ? `${activeDishesNumber * 10} złotych` : "Nie wybrałeś dania"}</h2>
        </>
    )
}

const Dish = (props) => {
    return (
        <li
            style={props.active ? { fontWeight: "bold" } : { color: "gray" }}
            onClick={() => props.changeStatus(props.id)}
        >
            {props.name}
        </li>
    )
}

const ListDishes = (props) => {

    const dishes = props.dishes.map(dish => (
        <Dish
            key={dish.id}
            id={dish.id}
            name={dish.name}
            active={dish.active}
            changeStatus={props.changeStatus}
        />
    ))


    return (
        <>
            <h3>Twoje zamówienie:</h3>
            <ul>
                {dishes}
            </ul>
        </>
    )
}

class App extends React.Component {
    state = {
        dishes: [
            { id: 1, name: "kotlet schabowy", active: true },
            { id: 2, name: "ziemniaki", active: true },
            { id: 3, name: "frytki", active: true },
            { id: 4, name: "surówka", active: true },
            { id: 5, name: "pierogi ruskie", active: true },
            { id: 6, name: "placki ziemniaczane", active: true },
            { id: 7, name: "kotlet mielony", active: false },
            { id: 8, name: "rosół", active: true }
        ]


    }

    handleChangeStatus = (id) => {
        const dishes = this.state.dishes.map(dish => {
            if (id === dish.id) {
                dish.active = !dish.active
            }
            return dish
        })
        this.setState({
            dishes: dishes
        })
    }
    render() {
        return (
            <>
                <Header dishes={this.state.dishes} />
                <ListDishes dishes={this.state.dishes} changeStatus={this.handleChangeStatus} />
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))