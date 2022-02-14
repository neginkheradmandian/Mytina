import dynamic from "next/dynamic";
import { GlobalFormPlugin } from "tinacms";
import { TinaEditProvider } from "tinacms/dist/edit-state";

// @ts-ignore FIXME: default export needs to be 'ComponentType<{}>
const TinaCMS = dynamic(() => import("tinacms"), { ssr: false });

const branch = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF;
const clientId = '59ef5bca-5cbb-4999-adfc-01973214d097'
// When working locally, hit our local filesystem.
// On a Vercel deployment, hit the Tina Cloud API
const apiURL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:4001/graphql"
    : `https://content.tinajs.io/content/${clientId}/github/${branch}`;

const App = ({ Component, pageProps }) => {
  return (
    <>
      <TinaEditProvider
        showEditButton={true}
        editMode={
          <TinaCMS apiURL={apiURL} 
          cmsCallback= { cms=> {
            import('react-tinacms-editor').then((field)=>{
              cms.plugins.add(field.MarkdownFieldPlugin)
            }), import('../plugins.tsx').then(({emailFieldPlugin})=> {
              cms.plugins.add(emailFieldPlugin)
            })
          }}
          formifyCallback= {({ formConfig, createForm, skip})=> {
            if (formConfig.id === 'getSiteNavsDocument') {
              const form = new Form(formConfig)
              cms.plugins.add(new GlobalFormPlugin(form))
              return form
            }
            return createForm(formConfig)
          }}
          >
            <Component {...pageProps} />

          </TinaCMS>
        }
      >
        <Component {...pageProps} />
      </TinaEditProvider>
    </>
  );
};

export default App;
