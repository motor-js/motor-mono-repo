import React from "react";

import { Button, Form, Input, Message, Table, Icon } from "semantic-ui-react";
// import "./styles.css";
import "semantic-ui-css/semantic.min.css";

const BookmarkComponent = () => {
  const lista = [
    {
      key: 1,
      model: "11111111",
      sn: "TERR5RRTR555465",
      fv: "FV/12344/2019",
    },
    {
      key: 2,
      model: "2222222",
      sn: "TERR5RRTR555465",
      fv: "FV/12344/2019",
    },
    { key: 3, model: "33333", sn: "TERR5RRTR555465", fv: "FV/12344/2019" },
    {
      key: 4,
      model: "44444444",
      sn: "TERR5RRTR555465",
      fv: "FV/12344/2019",
    },
    {
      key: 5,
      model: "5555555",
      sn: "TERR5RRTR555465",
      fv: "FV/12344/2019",
    },
  ];

  const handleChange = (value, name, id) => {
    const { lista } = this.state;
    const newData = [
      ...lista.filter((item) => item.key !== id),
      { ...lista.filter((item) => item.key === id)[0], [name]: value },
    ];
    this.setState({ lista: newData });
  };

  const addData = () => {
    const { lista } = this.state;
    this.setState({
      lista: [
        ...lista,
        {
          key: lista[lista.length - 1].key + 1,
          model: this.model.inputRef.current.value,
          sn: this.sn.inputRef.current.value,
          fv: this.fv.inputRef.current.value,
        },
      ],
    });
    this.model.inputRef.current.value = "";
    this.sn.inputRef.current.value = "";
    this.fv.inputRef.current.value = "";
  };

  const trash = (id) => {
    this.setState({
      lista: this.state.lista.filter((item) => item.key !== id),
    });
  };

  return (
    <>
      <div className="segm_space">
        <Message attached header="Table list" />
        <Form className="attached fluid segment">
          <Table
            basic="very"
            celled
            compact
            className="list_hardwares"
            unstackable
          >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Data</Table.HeaderCell>
                <Table.HeaderCell>Number</Table.HeaderCell>
                <Table.HeaderCell>Type</Table.HeaderCell>
                <Table.HeaderCell style={{ width: "1%" }} />
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {lista
                .sort((prev, next) => {
                  if (prev.key > next.key) return 1;
                  return -1;
                })
                .map((item) => (
                  <Table.Row key={item.key}>
                    <Table.Cell>
                      <Input
                        fluid
                        transparent
                        name="model"
                        onChange={(e, data) =>
                          handleChange(data.value, data.name, item.key)
                        }
                        placeholder="00000000000"
                        defaultValue={item.model}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Input
                        fluid
                        transparent
                        name="sn"
                        onChange={(e, data) =>
                          handleChange(data.value, data.name, item.key)
                        }
                        placeholder="XXXXXXXXXXXXXXX"
                        defaultValue={item.sn}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Input
                        fluid
                        transparent
                        name="fv"
                        onChange={(e, data) =>
                          handleChange(data.value, data.name, item.key)
                        }
                        defaultValue={item.fv}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Button
                        onClick={() => trash(item.key)}
                        compact
                        size="tiny"
                        icon="trash"
                      />
                    </Table.Cell>
                  </Table.Row>
                ))}
              <Table.Row>
                <Table.Cell>
                  <Input
                    fluid
                    transparent
                    name="model"
                    // ref={(n) => (this.model = n)}
                    placeholder="00000000000"
                  />
                </Table.Cell>
                <Table.Cell>
                  <Input
                    fluid
                    transparent
                    name="sn"
                    // ref={(n) => (this.sn = n)}
                    placeholder="XXXXXXXXXXXXXXX"
                  />
                </Table.Cell>
                <Table.Cell>
                  <Input
                    fluid
                    transparent
                    name="fv"
                    // ref={(n) => (this.fv = n)}
                  />
                </Table.Cell>
                <Table.Cell>
                  <Button compact size="tiny" icon="add" onClick={addData} />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Footer fullWidth>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell colSpan="4">
                  <Button
                    floated="right"
                    icon
                    labelPosition="left"
                    primary
                    size="small"
                  >
                    <Icon name="user" /> Add User
                  </Button>
                  <Button size="small">Approve</Button>
                  <Button disabled size="small">
                    Approve All
                  </Button>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Form>
      </div>
    </>
  );
};

export default BookmarkComponent;
