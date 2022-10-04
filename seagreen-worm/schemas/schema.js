// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// firstbanner
import firstbanner from './firstbanner';
import tbanner from './tbanner';
import iconus from './iconus';
import val from './val';
import users from './users';
import bfeatures from './bfeatures';
import features from './features';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([firstbanner, val, users, features, bfeatures, tbanner, iconus]),
})
