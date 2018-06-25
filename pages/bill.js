/**
 * Created by nickdelfino on 9/26/17.
 */
import React from 'react';
import BillNav from '../src/Components/BillNav';
import BillScreen from '../src/Components/Screens/BillScreen';

export default ({ url: { query: { slug } } }) =>
    <div>
      <BillNav />
      <BillScreen slug={slug}/>
    </div>
