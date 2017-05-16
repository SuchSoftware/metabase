/* @flow */

// Reducers shared between "main" and "public" apps

import auth from "metabase/auth/auth";

/* ducks */
import app from "metabase/redux/app";
import metadata from "metabase/redux/metadata";
import requests from "metabase/redux/requests";
import settings from "metabase/redux/settings";
import undo from "metabase/redux/undo";

import { reducer as filters } from './filters'

/* user */
import { currentUser } from "metabase/redux/user";

export default {
    // global reducers
    app,
    auth,
    currentUser,
    filters,
    metadata,
    requests,
    settings,
    undo,
};
