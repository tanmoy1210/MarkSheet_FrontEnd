
import {Routes,Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Admin from './components/Admin';
import RequireAuth from './components/RequireAuth';
//import Register from './components/Register';
import Login from './components/Login';
import Editor from './components/Editor';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import Lounge from './components/Lounge';
import LinkPage from './components/LinkPage';
import { State } from './page/m_page/M_State';
import { Country } from './page/m_page/M_Country';
import { User } from './page/m_page/M_User';  
import {UsersList} from "./page/m_page/M_User_View";
import { UserEdit } from './page/m_page/M_User_Edit';
import { UserRole } from './page/m_page/M_UserRole';
import { UserRoleList } from './page/m_page/M_UserRole_View';
import { UserRoleEdit } from './page/m_page/M_UserRole_Edit';
import { CasteCategory } from './page/m_page/M_CasteCategory';
import { CasteCategoryList } from './page/m_page/M_CasteCategory_View';
import { CasteCategoryEdit } from './page/m_page/M_CasteCategory_Edit';
import { BloodGroup } from './page/m_page/M_BloodGroup';
import { BloodGroupList } from './page/m_page/M_BloodGroup_View';
import { BloodGroupEdit } from './page/m_page/M_BloodGroup_Edit';
import { Relation } from './page/m_page/M_Relation';
import { RelationList } from './page/m_page/M_Relation_View';
import { RelationEdit } from './page/m_page/M_Relation_Edit';

const ROLES = {
  'Staff': 5,
  'Student': 2,
  'Teacher':4,
  'Admin': 1
}

function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      {/* public routes */}
      <Route path="login" element={<Login />} />
      {/* <Route path="register" element={<Register />} /> */}
      <Route path="linkpage" element={<LinkPage />} />
      <Route path="unauthorized" element={<Unauthorized />} />

      {/* we want to protect these routes */}
      <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Staff]} />}>
        <Route path="/" element={<Home />} />
        <Route path='State' element={<State/>}/>
        <Route path='Country' element={<Country/>}/>
        <Route path='User' element={<User/>}/>
        <Route path='UserList' element={<UsersList/>}/> 
        <Route path="UserEdit/:userId" element={<UserEdit/>}/>
        <Route path="UserRole" element={<UserRole/>}/>
        <Route path='UserRoleList' element={<UserRoleList/>}/>
        <Route path="UserRoleEdit/:roleId" element={<UserRoleEdit/>}/>

        <Route path='CasteCategory' element={<CasteCategory/>}/>
        <Route path='CasteCategoryList' element={<CasteCategoryList/>}/>
        <Route path='CasteCategoryEdit/:casteCategoryId' element={<CasteCategoryEdit/>}/>

        <Route path='BloodGroup' element={<BloodGroup/>}/>
        <Route path='BloodGroupList' element={<BloodGroupList/>}/>
        <Route path='BloodGroupEdit/:bloodGroupId' element={<BloodGroupEdit/>}/>


        <Route path='Relation' element={< Relation/>}/>
        <Route path='RelationList' element={<RelationList/>}/>
        <Route path='RelationEdit/:relationId' element={< RelationEdit/>}/>

      </Route>

      <Route element={<RequireAuth allowedRoles={[ROLES.Staff]} />}>
        <Route path="editor" element={<Editor />} />
      </Route>


      <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
        <Route path="admin" element={<Admin />} />
      </Route>

      <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
        <Route path="lounge" element={<Lounge />} />
      </Route>

      {/* catch all */}
      <Route path="*" element={<Missing />} />
    </Route>
  </Routes>
  );
}

export default App;
