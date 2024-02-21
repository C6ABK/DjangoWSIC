import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";
import KeyMetrics from "../../components/Demo/KeyMetrics";
import Quality from "../../components/Demo/Quality";
import RCPS from "../../components/Demo/RCPS";
import Health from "../../components/Demo/Health";
import SAPPerformance from "../../components/Demo/SAPPerformance";
import WPO from "../../components/Demo/WPO";
import AddProduct from "../../components/Demo/AddProduct"
import Product from "../../components/Demo/Product"

import {
  ChevronDoubleUpIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/outline";

function MorningGoods() {
  const [toggleKey, setToggleKey] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const navigate = useNavigate();

  const keyMetricHandler = (e) => {
    setToggleKey(!toggleKey);
  };

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
    setToggleKey(true);
    document.title = "SIC - Morning Goods";
  }, [navigate, userInfo]);

  return (
    <>
      {userInfo && (
        <Sidebar userInfo={userInfo}>
          <Card>
            <KeyMetrics />
            {toggleKey ? (
              <>
                <div className="flex flex-col xl:flex-row space-x-0 xl:space-x-4">
                  <Health />
                  <Quality />
                  <RCPS />
                  <SAPPerformance />
                  <WPO />
                </div>

                <div className="flex justify-center py-2 text-gray-500">
                  <button onClick={keyMetricHandler}>
                    <ChevronDoubleUpIcon className="w-8 h-8" />
                  </button>
                </div>
              </>
            ) : (
              <div className="flex justify-center text-center py-2 text-gray-500">
                <button className="flex space-x-4 items-center text-xs" onClick={keyMetricHandler}>
                  <div>Show Key Metrics</div>
                  <ChevronDoubleDownIcon className="w-4 h-4" />
                </button>
              </div>
            )}
            <hr />
            <AddProduct />
            <hr />
            <Product product="Fruit Teacakes" />
            <Product product="Large White Rolls" />
            {/* Products and losses here */}
          </Card>
        </Sidebar>
      )}
    </>
  );
}

export default MorningGoods;
