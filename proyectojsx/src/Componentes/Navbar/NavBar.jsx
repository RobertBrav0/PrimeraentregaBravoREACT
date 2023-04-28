import { CarWidget } from "../CarWidget/CarWidget"


 export const NavBar = () => {
    return (
        <nav>
            <h3>Palteados</h3>
            <div>
                <button>Medias</button>
                <button>Lenceria</button>
                <button>Gorras</button>
            </div>
            <CarWidget />
        </nav>
    )
}
