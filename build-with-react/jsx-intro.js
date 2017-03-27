var ipsumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.';

// NOTE: You must you className to represent class in React
ReactDOM.render(
  <div>
    <a href="#" className="button">Button</a>
    <div>{ipsumText}</div>
  </div>,
  document.getElementById('impl')
)
