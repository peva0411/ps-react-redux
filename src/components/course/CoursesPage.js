import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component{

    constructor(props, context){
        super(props, context);

        this.redirctToAddCoursesPage = this.redirctToAddCoursesPage.bind(this);
    }

    redirctToAddCoursesPage(){
        this.props.history.push('/course');
    }

    render(){
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <input type="submit"
                    className="btn btn-primary"
                    value="Add Course"
                    onClick={this.redirctToAddCoursesPage}/>
                <CourseList courses={courses}/>
            </div>
        );
    }
}

CoursesPage.PropTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    debugger;
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage) ;