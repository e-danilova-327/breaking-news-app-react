import React from 'react';

const Header = () => {
    return (
        <header
            className="masthead"
            style={{
                backgroundImage:
                    'url(https://media.istockphoto.com/vectors/vintage-big-brother-watching-you-spying-eyes-surveillance-and-privacy-vector-id981630990?k=20&m=981630990&s=170667a&w=0&h=pkYU4ISpsniRkaXJ9VIcCqbqld9S5uMyf4bFoD6hpYE=)',
            }}
        >
            <div className={'container position-relative px-4 px-lg-5'}>
                <div className={'row gx-4 gx-lg-5 justify-content-center'}>
                    <div className={'col-md-10 col-lg-8 col-xl-7'}>
                        <div className="page-heading">
                            <h1 className="glow">Are YOU watching?</h1>
                            <p className="subheading">
                                Discover the latest news with us!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
