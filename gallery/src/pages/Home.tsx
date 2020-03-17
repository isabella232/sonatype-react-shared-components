/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {GalleryTile} from '../gallery-components/GalleryTiles';
import CodeExample from '../CodeExample';

const fontFaceExampleCode = require('!!raw-loader!../resources/FontFaceExample.scss').default,
    pageConfigExample = `import Foo from './pages/Foo';
import Bar from './pages/Bar';
import Baz from './pages/Baz';
import NxCheckboxPage from './components/NxCheckboxPage';

const pageConfig: PageConfig = {
  'Styles - HTML Elements': {
    'foo component': Foo,
    'bar': Bar,
    'baz': Baz
  },
  'React Components': {
    'NxCheckbox': NxCheckboxPage
  }
};`;

const Home = () =>
  <>
    <GalleryTile title="How to add a new component to the Gallery" >
      <h3>Create a page describing the component</h3>
      <ul>
        <li>
          For each component or style that you want to add to the Gallery, create a subdirectory
          underneath <code className="nx-code">src/components</code> or <code className="nx-code">src/styles</code>
          with the name of the component or style
        </li>
        <li>
          Under the subdirectory, create 2 Typescript files to describe the behavior of your component or style. One
          file will be <code className="nx-code">[ComponentName]Example.tsx</code>, which has a working example of the
          component with how different parameters are handled. The second file will
          be <code className="nx-code">[ComponentName]Page.tsx</code>, which should contain 3 things:
          <ul>
            <li>
              A description of the component and its parameters, as well as an example of how to use the component.
              See also the <code className="nx-code">GalleryDescriptionTile</code> component
            </li>
            <li>Code that demonstrates the component (import the example component and invoke it)</li>
            <li>
              Code snippet of the example component (use the <code className="nx-code">CodeExample</code> component)
            </li>
          </ul>
        </li>
        <li>
          See also <code className="nx-code">NxCheckboxPage.tsx</code>
          and <code className="nx-code">NxCheckboxExample.tsx</code> as an example of how to create a
          component example.
        </li>
      </ul>
      <h3>Add the new page to Gallery navigation</h3>
      <p>
        After you've created the description page, in order to add the component to the Gallery Navigation, you
        will need to add it to the <code className="nx-code">pageConfig</code> object inside of
        the <code className="nx-code">pageConfig.ts</code> file
      </p>
      <CodeExample content={pageConfigExample}/>
      <ul>
        <li>
          Import the description page you created earlier
        </li>
        <li>Place the entry in the proper category (creating a new category if necessary)</li>
        <li>
          It is important to note that the key that you use for your entry will be used
          by <code className="nx-code">react-router</code> to auto-populate the left-hand navigation, page title and URL
        </li>
      </ul>
    </GalleryTile>
    <GalleryTile title="A note on typography">
      <p>
        While the <code className="nx-code">font-family</code> declaration
        in <code className="nx-code">_nx-text-helpers.scss</code> declaration calls for Proxima Nova, it is not
        included in the bundle because it is a proprietary font. If you are using the React Shared Components in a
        Sonatype product please make sure you use <code className="nx-code">@font-face</code> in your project's
        (S)CSS to correctly load the Proxima Nova fonts (see example below).
      </p>
      <p>
        In all other cases the font will fall back
        to <code className="nx-code">Helvetica Neue, Helvetica, sans-serif</code>.
      </p>
      <CodeExample language="scss" content={fontFaceExampleCode} />
    </GalleryTile>
  </>;
export default Home;