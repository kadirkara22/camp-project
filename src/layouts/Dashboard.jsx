import React from 'react'
import { Button, GridColumn, Icon, Label } from 'semantic-ui-react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'

import { Grid } from 'semantic-ui-react'
export default function Dashboard() {
    return (
          <div>
               <Grid>
                <Grid.Row>
                  <GridColumn width={4}>
                  <Categories></Categories>
                  </GridColumn>
                  <GridColumn width={12}>
                  <ProductList></ProductList>
                    </GridColumn>
                  </Grid.Row> 
                  </Grid> 
        </div>
    )
}
