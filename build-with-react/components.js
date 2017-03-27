// Render is a MUST implement function for components
var VacancySign = React.createClass({
  render : function() {
      <div>{this.props.hasVacancy ? 'Vacancy' : 'No Vacancy'}</div>
    );
  }
});


ReactDOM.render(
  <VacancySign hasVacancy={true} />
  document.getElementById('container')
);
