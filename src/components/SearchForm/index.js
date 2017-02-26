import React, {Component} from 'react'

export default class SearchForm extends Component {
    render() {
        return (
            <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search"/>
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
        );
    }
} 