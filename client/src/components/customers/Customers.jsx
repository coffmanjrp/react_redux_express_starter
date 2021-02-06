import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getCustomers } from '../../store/actions/customers';
import './customers.css';

const Customers = ({ getCustomers, customers }) => {
  useEffect(() => {
    getCustomers();
  }, []);
  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.firstName} {customer.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  customers: state.customers,
});

const dispatchToProps = (dispatch) => ({
  getCustomers: () => dispatch(getCustomers()),
});

export default connect(mapStateToProps, dispatchToProps)(Customers);
