import React, { Component } from 'react';
import { Formik } from 'formik';
import { Grid, Divider } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components';
import * as Yup from 'yup';
import isEmpty from 'lodash/isEmpty';

import { Input } from 'components/Form';
import Card from 'components/Card';
import Button from 'components/Button';
import Table from 'components/Table';

class Memo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updatedMemo: {},
    };
    this.form = null;
    this.contentRef = null;
    this.validateSchema = Yup.object().shape({
      content: Yup.string().required('Required'),
    });
  }

  componentDidMount() {
    const { getMemos, memos } = this.props;
    if (memos.length === 0) {
      getMemos();
    }
  }

  renderForm = formProps => {
    const { values, dirty, isValid, handleChange, handleSubmit } = formProps;

    return (
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Input
              type="text"
              inputProps={{
                name: 'content',
                label: 'Content',
                placeholder: 'Enter Content',
                value: values.content,
                onChange: handleChange,
                autoFocus: true,
                setRef: el => {
                  this.contentRef = el;
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              buttonProps={{
                type: 'submit',
                disabled: !dirty || !isValid,
              }}
            >
              Create Memo
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  };

  render() {
    const { memos, createMemo, updateMemo, deleteMemo } = this.props;
    const { updatedMemo } = this.state;

    const columns = [
      {
        id: 1,
        name: 'id',
        label: 'Id',
        minWidth: 30,
      },
      {
        id: 2,
        name: 'isMe',
        label: 'User',
        minWidth: 100,
        format: value => {
          return <>{value ? 'Me' : 'Other User'}</>;
        },
      },
      { id: 3, name: 'content', label: 'Content', width: '75%', minWidth: 500 },
      {
        id: 4,
        minWidth: 250,
        name: 'object',
        label: 'Action',
        format: value => {
          if (!value.isMe) {
            return (
              <span>
                You can <b>update</b> and <b>delete</b> memo which belong to you
                only!
              </span>
            );
          }
          return (
            <ButtonGroupWrapper>
              <ButtonWrapper>
                <Button
                  buttonProps={{
                    onClick: () => {
                      this.setState({
                        updatedMemo: value,
                      });
                      if (this.contentRef) {
                        this.contentRef.focus();
                      }
                    },
                  }}
                >
                  <EditIcon /> Update
                </Button>
              </ButtonWrapper>
              <ButtonWrapper>
                <Button
                  buttonProps={{
                    onClick: () => {
                      deleteMemo(value);
                    },
                  }}
                >
                  <DeleteIcon /> Delete
                </Button>
              </ButtonWrapper>
            </ButtonGroupWrapper>
          );
        },
      },
    ];

    const initialValues = {
      content: isEmpty(updatedMemo) ? '' : updatedMemo.content,
    };

    return (
      <Wrapper>
        <div className="heading">
          <h2>Memo Management</h2>
        </div>
        <Card
          cardProps={{
            title: `Memo Information`,
          }}
        >
          <Formik
            initialValues={initialValues}
            enableReinitialize
            validationSchema={this.validateSchema}
            onSubmit={values => {
              if (isEmpty(updatedMemo)) {
                createMemo({
                  id: memos.length + 1,
                  content: values.content,
                  isMe: true,
                });
              } else {
                updateMemo({
                  ...updatedMemo,
                  content: values.content,
                });
                this.setState({
                  updatedMemo: {},
                });
              }
              this.form.handleReset();
            }}
            render={this.renderForm}
            ref={el => {
              this.form = el;
            }}
          />
        </Card>
        <Divider />
        <Inner>
          <Table
            type="fixed"
            tableProps={{
              columns,
              rows: memos,
              notFoundLabel: 'Memo Not Found',
              tableHeight: 'calc(100vh - 180px)',
            }}
          />
        </Inner>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  flex-direction: row;
  justify-content: flex-start;
`;
const Inner = styled.div`
  flex-direction: row;
  justify-content: flex-start;
`;
const ButtonGroupWrapper = styled.div`
  display: flex;
`;
const ButtonWrapper = styled.div`
  width: 150px;
  margin-right: 1.5rem;
`;

export default Memo;
