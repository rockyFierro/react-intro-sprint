import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';

function Home() {
    return (
        <div>
            <Link to="/Pizza">
                <Button>Order Now!</Button>
            </Link>

        </div>
    );
}

export default Home;