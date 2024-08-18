import React from 'react'

export const ListSmallButtons = () => {
    return (
        <>
            <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" id="dropdownFadeIn" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Click Me!</button>
                <div class="dropdown-menu animated--fade-in" aria-labelledby="dropdownFadeIn">
                    <a class="dropdown-item" href="#!">Action</a>
                    <a class="dropdown-item" href="#!">Another action</a>
                    <a class="dropdown-item" href="#!">Something else here</a>
                </div>
            </div>
        </>
    )
}
