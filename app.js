/* Scenario**************

<div id="parent">
    <div id="child">
        <h1>I am a H1 Tag</h1>
        <h2>I am  a H2 Tag</h2>
    </div>
</div>
*/

const parent = React.createElement('div', {id: "parent"},
    [React.createElement('div', {id: "child"},
    [React.createElement("h1", {id:"heading"},
     "I am a H1 tag"), React.createElement("h2", {}, "I am a H1 tag")]
    ),
    React.createElement('div', {id: "child2"},
    [React.createElement("h1", {id:"heading"},
        "I am a H1 tag"), React.createElement("h2", {}, "I am a H1 tag")]
    )]
)


const heading =  React.createElement("h1", {id:"heading"}, "Hello World from React!");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);