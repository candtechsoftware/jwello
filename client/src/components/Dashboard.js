import React, { Component } from 'react';
import ProjectItem from './Projects/ProjectItem';
import { CreateProjctButton } from './Projects/CreateProjctButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProjects } from '../redux/actions/projectActions';

class Dashboard extends Component {
  componentDidMount(){
    this.props.getProjects();
    console.log(this.props.project);
  }
  render() {
      return (
        <div className="projects">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4 text-center">Projects</h1>
                    <br />
                    <CreateProjctButton />
                    <br />
                    <hr />
                    <ProjectItem />

                    </div>
            </div>
        </div>
    </div>
      );

  }
}

Dashboard.propTypes = {
  projects: PropTypes.array.isRequired,
  getProjects: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  project: state.project
})
export default connect(mapStateToProps,{getProjects})(Dashboard);