import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import { TodoItem } from '../TodoItem';


export class TodoList extends React.Component {
    state = {
        filter: null,
        editItemID: null,
    };

    render() {
        return (
            <div>
                {this.getFilter()}
                {this.getList()}
            </div>
        );
    }

    getFilter() {
        return (
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                {this.renderFilterItem('All Items', null)}
                {this.renderFilterItem('Done Items', true)}
                {this.renderFilterItem('Undone Items', false)}
            </ButtonGroup>
        );
    }

    renderFilterItem(text, filterValue) {
        const { filter } = this.state;
        const variant = filterValue === filter ? 'contained' : null;

        return (
            <Button variant={variant} onClick={() => this.clickFilterButton(filterValue)}>
                {text}
            </Button>
        );
    }

    getList() {
        const { filter } = this.state;
        let items = this.props.list;

        if (filter === true) {
            items = items.filter(item => item.done);
        } else if (filter === false) {
            items = items.filter(item => !item.done);
        }

        return (
            <div>
                {items.map(item => this.renderTodoItem(item))}
            </div>
        );
    }

    renderTodoItem(item) {
        if (this.state.editItemID === item.id) {
            return null;
        }

        return (
            <TodoItem
                key={item.id}
                item={item}
            />
        );
    }

    clickFilterButton(filter) {
        this.setState({ filter });
    }
}
