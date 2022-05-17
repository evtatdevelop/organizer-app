import Service from "../services";
import React from "react";

const ServiceContext = React.createContext(new Service());

export default ServiceContext;