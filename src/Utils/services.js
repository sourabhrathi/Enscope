import axios from 'axios'
import { AdminfilterCema, AdminfilterScope1, AdminfilterScope2, AdminfilterScope3, AdminReportingYear, AdminScope1View, AdminScope2View, AdminScope3View, CertificateView, CommentView, CreateUser, currentYear, DeleteFilter, DownloadCertificate, editRequest, LOGIN, plantShow, ReportView, RequestStatus, ScopeDelete, ScopeEmission, ScopeEmissionData, ScopeEmissionUpload, SettingGetScope, StoreEmission, StoreFilter, UpdateEditRequest, UpdateFilter, UpdateScopeEmmission, UPDATESTATUS, UploadCertificate, UploadImage, UserUpdate, UserViewData, ViewAssessment, VIEWCOMPANY, YEAR_DATA } from './routes'
export const BASE_URL = 'https://api.enscope.techtonic.asia/' //production///filter

axios.defaults.baseURL = BASE_URL
const token = localStorage.getItem('token')
// console.log(token, 'token check')

const year = localStorage.getItem('form')
// console.log(year,"form-year");

export const loginService = async (data) => {
  try {
    const response = await axios.post(LOGIN, data, {
      headers: { 'Content-Type': 'application/json' },
    })
    console.log(response,"gjguygyo");
    if (response.status === 200) {
      console.log(response.data)
      return { res: response.data }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }

}

export const getViewProfile = async (data) => {
  try {
    const response = await axios.get(VIEWCOMPANY, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    if (response.status === 200) {
      return { res: response.data }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}

export const REQUEST_STATUS = async (data) => {
  try {
    const response = await axios.get(RequestStatus + year, {
      headers: { Authorization: 'Bearer ' + token, },
    })
    if (response.status === 200) {
      // console.log(response.data)
      return { res: response.data }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}

export const STATUSUPDATE = async (data, webid) => {
  try {
    const response = await axios.put(UPDATESTATUS + webid, data, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
    })
    if (response.status === 200) {
      console.log(response.data)
      return {
        res: response.data
      }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}

export const REQUEST_EDIT = async (data) => {
  try {
    const response = await axios.get(editRequest + year, {
      headers: { Authorization: 'Bearer ' + token, },
    })
    if (response.status === 200) {
      console.log(response.data)
      return { res: response.data }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}

export const UPDATEEDIT = async (data, webid) => {
  try {
    const response = await axios.put(UpdateEditRequest + webid, data, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
    })
    if (response.status === 200) {
      console.log(response.data)
      return {
        res: response.data
      }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}

export const ImageUpload = async (data, webid) => {
  try {
    const response = await axios.post(UploadImage + webid + '/upload', data, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'multipart/form-data'
      },
    })
    if (response.status === 200) {
      console.log(response.data)
      return {
        res: response.data
      }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}

export const Certificateupload = async (data, webid) => {
  try {
    const response = await axios.post(UploadCertificate + webid + '/upload', data, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'multipart/form-data'
      },
    })
    if (response.status === 200) {
      console.log(response.data)
      return {
        res: response.data
      }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}

export const getYear = async (data) => {
  try {
    const response = await axios.get(YEAR_DATA, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};

export const AssessmentView = async (id) => {
  try {
    const response = await axios.get(`${ViewAssessment}/${id}/${year}`, { 
      headers: { Authorization: 'Bearer ' + token, },
    })
    if (response.status === 200) {
      console.log(response.data)
      return { res: response.data }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}


export const UserCreate = async (data, webid) => {
  try {
    const response = await axios.post(CreateUser, data, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'

      },
    })
    if (response.status === 200) {
      console.log(response.data)
      return {
        res: response.data
      }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}


export const EmissionScope = async (data, webid) => {
  try {
    const response = await axios.post(ScopeEmissionUpload, data, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'multipart/form-data'
      },
    })
    if (response.status === 200) {
      console.log(response.data)
      return {
        res: response.data
      }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}

export const DataScopeEmission = async (data) => {
  try {
    const response = await axios.get(ScopeEmissionData, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};

export const EmissionStoreData = async (data, webid) => {
  try {
    const response = await axios.post(StoreEmission, data, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
    })
    if (response.status === 200) {
      console.log(response.data)
      return {
        res: response.data
      }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
};

export const ScopeEmmissionUpdate = async (data,id) => {
  try {
    const response = await axios.put(`${UpdateScopeEmmission}/${id}`, data, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
    })
    if (response.status === 200) {
      console.log(response.data)
      return {
        res: response.data
      }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}

export const DeleteScope = async (id) => {
  try {
    const response = await axios.delete(`${ScopeDelete}/${id}`, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
    })
    if (response.status === 200) {
      console.log(response.data)
      return {
        res: response.data
      }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}



export const ScopeSettingGet = async (data) => {
  try {
    const response = await axios.get(SettingGetScope, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};

export const FilterStore = async (data, webid) => {
  try {
    const response = await axios.post(StoreFilter, data, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
    })
    if (response.status === 200) {
      console.log(response.data)
      return {
        res: response.data
      }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}

export const FilterUpdate = async (data,id) => {
  try {
    const response = await axios.put(`${UpdateFilter}/${id}`, data, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
    })
    if (response.status === 200) {
      console.log(response.data)
      return {
        res: response.data
      }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}
export const FilterDelete = async (id) => {
  try {
    const response = await axios.delete(`${DeleteFilter}/${id}`, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
    })
    if (response.status === 200) {
      console.log(response.data)
      return {
        res: response.data
      }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}

export const ViewDataUser = async (data) => {
  try {
    const response = await axios.get(UserViewData, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};

export const UpdateUser = async (data) => {
  try {
    const response = await axios.put(`${UserUpdate}`, data, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
    })
    if (response.status === 200) {
      console.log(response.data)
      return {
        res: response.data
      }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}

export const ReportingYearAdmin = async (id) => {
  console.log(id,"id")
  try {
    const response = await axios.get(`${AdminReportingYear}/${id}`, { 
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};

export const Scope1ViewAdmin = async (id) => {
  try {
    const response = await axios.get(`${AdminScope1View}/${id}/${year}`, {   
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};

export const Scope2ViewAdmin = async (id) => {
  try {
    const response = await axios.get(`${AdminScope2View}/${id}/${year}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};

export const Scope3ViewAdmin = async (id) => {
  try {
    const response = await axios.get(`${AdminScope3View}/${id}/${year}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};

export const YearCurrent = async (data) => {
  try {
    const response = await axios.get(currentYear, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (response.status === 200) {
      return { res: response.data };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
};

export const filterAdminScope1 = async (data) => {
  console.log(data,'chkk');
  try {
    const response = await axios.post(AdminfilterScope1, data, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
    })
    if (response.status === 200) {
      console.log(response.data)
      return {
        res: response.data
      }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}

export const Showplant = async (data, webid) => {
  try {
    const response = await axios.post(plantShow, data, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
    })
    if (response.status === 200) {
      console.log(response.data)
      return {
        res: response.data
      }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}

export const filterAdminScope2 = async (data) => {
  console.log(data,'chkk');
  try {
    const response = await axios.post(AdminfilterScope2, data, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
    })
    if (response.status === 200) {
      console.log(response.data)
      return {
        res: response.data
      }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}

export const filterAdminScope3 = async (data) => {
  console.log(data,'chkk');
  try {
    const response = await axios.post(AdminfilterScope3, data, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
    })
    if (response.status === 200) {
      console.log(response.data)
      return {
        res: response.data
      }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}

export const filterAdminCema = async (data) => {
  try {
    const response = await axios.post(AdminfilterCema, data, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
    })
    if (response.status === 200) {
      console.log(response.data)
      return {
        res: response.data
      }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}

export const ViewComment = async (id) => {
  try {
    const response = await axios.get(`${CommentView}/${id}/${year}`, { 
      headers: { Authorization: 'Bearer ' + token, },
    })
    if (response.status === 200) {
      // console.log(response.data)
      return { res: response.data }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}

export const ViewReport = async (data) => {
  try {
    const response = await axios.get(ReportView + year, {
      headers: { Authorization: 'Bearer ' + token, },
    })
    if (response.status === 200) {
      console.log(response.data)
      return { res: response.data }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}

export const ViewCertificate = async (data) => {
  try {
    const response = await axios.get(CertificateView + year, {
      headers: { Authorization: 'Bearer ' + token, },
    })
    if (response.status === 200) {
      console.log(response.data)
      return { res: response.data }
    } else return response.data
  } catch (err) {
    if (err.response) throw err.response.data
    else throw err.message
  }
}