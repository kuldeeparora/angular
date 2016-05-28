var Card = React.createClass({
   render: function () {
       return (
           <div>
               <img src="https://avatars.githubusercontent.com/u/1213220?v=3" width="80px" />
               <h3>Name Here</h3>
               <hr />
           </div>
       );
   } 
});

var Main = React.createClass({
    render : function () {
        return  (
            <div>
                <Card />
            </div>
        )
    }

});

ReactDOM.render(<Main/>, document.getElementById('root'));