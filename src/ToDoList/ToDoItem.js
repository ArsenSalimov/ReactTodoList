import React from 'react';
import {Card, CardTitle, CardText, CardActions} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';

export default class ToDoItem extends React.Component {
    constructor(props) {
        super();

        this.state = {
            isEdit: false,
            description: props.description
        };

        this.onDescriptionChanged = this.onDescriptionChanged.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
    }

    renderDescription(description) {
        if (this.state.isEdit) {
            return (
                <CardText>
                    <TextField onChange={this.onDescriptionChanged} value={this.state.description}
                               multiLine={true}
                               hintText="Description"/>

                    <div style={{float: 'right'}}>
                        <IconButton onClick={this.onSaveClick} tooltip="Save">
                            <FontIcon className="material-icons">done</FontIcon>
                        </IconButton>
                        <IconButton onClick={this.onCancelClick} tooltip="Cancel">
                            <FontIcon className="material-icons">clear</FontIcon>
                        </IconButton>
                    </div>
                </CardText>
            )
        } else {
            return <CardText>{description}</CardText>
        }
    }

    render() {
        const {itemId, description, onRemoveClick} = this.props;

        return (
            <Card className="toDoList__item">
                <CardTitle title='TODO Item'/>
                {this.renderDescription(description)}

                <CardActions>
                    <IconButton onClick={this.onEditClick} tooltip="Edit">
                        <FontIcon className="material-icons">border_color</FontIcon>
                    </IconButton>
                    <IconButton onClick={() => onRemoveClick(itemId)} tooltip="Remove">
                        <FontIcon className="material-icons">delete</FontIcon>
                    </IconButton>
                </CardActions>
            </Card>
        );
    }

    onDescriptionChanged(event) {
        this.setState({
            description: event.target.value
        })
    }

    onEditClick() {
        this.setState({
            isEdit: true
        })
    }

    onCancelClick() {
        this.setState({
            isEdit: false,
            description: this.props.description
        })
    }

    onSaveClick() {
        this.setState({
            isEdit: false
        });

        this.props.onEdit(this.props.itemId, this.state.description);
    }
}