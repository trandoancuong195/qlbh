import CONFIG from '../config'

let URL
let FBAPI
const ENV = CONFIG.env
switch (ENV) {
  case 'DEV':
    URL = 'https://api-dev.upos.vn/api/v2'
    // FBAPI = 'http://14.225.241.215/api/v2'
    FBAPI = 'https://api-node.upos.vn'
    break
  default:
    break
}
// https://api-dev.upos.vn/api/v2/auth/login
export function getUrlLogin(params) {
  // return `${URL}/auth/users`
  return `${URL}/auth/login`
}
export function saveAccount() { 
  return `${URL}/fb/page/update`
}
export function getCommentAndMesssage() { 
  return `${URL}/fb/pages/filter`
}
export function getUrlCustomerInfo() { 
  return `${URL}/fb/customer`
}
export function saveFbUser() { 
  return `${FBAPI}/fb/user/save`
}
export function getFbUser() {
  return `${FBAPI}/fb/user`
}
export function getFanpageList() {
  return `${FBAPI}/fb/pages`
}
export function getUrlUserInfo(params) {
  return `${URL}/auth/users`
}
export function getUrlLogOut() {
  return `${URL}/auth/logout`
}
export function getUrlDataChart(fromdate, toDate) {
  return `${URL}/dashboard/revenue?date_start=${fromdate}&date_end=${toDate}`
}
export function getUrlWareHouseInfo(is_purchase = '', keyword = '') {
  return `${URL}/warehouse/warehouses?is_purchase=${is_purchase}/keyword=${keyword}`
}
export function getUrlOrigin(keyword = '') {
  let url = `${URL}/order/origins?`
  if (keyword) url += `keyword=${keyword}`
  return url
}
export function getUrlOrderStatus() {
  return `${URL}/order/shipping/status`
}
export function getUrlEmployee(keyword = '', group = '', status = '') {
  let url = `${URL}/admin/employees?`
  if (keyword) url += `keyword=${keyword}`
  if (group) url += `group=${group}`
  if (status) url += `status=${status}`
  return url
}
export function getUrlOrder({
  keyword = '',
  customer_id = '',
  user_id = '',
  warehouse_id = '',
  shipping_partner = '',
  shipping_status = '',
  per_page = '',
  start = '',
  start_date = '',
  end_date = '',
}) {
  if (!start || start === '') start = '0'
  if (!per_page || per_page === '') per_page = '10'
  // start_date = "2021/01/01";
  // end_date = "2021/03/17";
  return `${URL}/order/orders?keyword=${keyword}&start_date=${start_date}&end_date=${end_date}&customer_id=${customer_id}&user_id=${user_id}&warehouse_id=${warehouse_id}&shipping_partner=${shipping_partner}&shipping_status=${shipping_status}&per_page=${per_page}&start=${start}`
}

export function getUrlReport({
  keyword = '',
  customer_id = '',
  warehouse_id = '',
  per_page = '',
  start = '',
  start_date = '',
  end_date = '',
  category_id = '',
}) {
  if (!start || start === '') start = '0'
  if (!per_page || per_page === '') per_page = '20'
  return `${URL}/report/warehouses/warehouse-inventories?keyword=${keyword}&start_date=${start_date}&end_date=${end_date}&customer_id=${customer_id}&warehouse_id=${warehouse_id}&per_page=${per_page}&start=${start}&category_id=${category_id}`
}

export function getUrlReportExcel({
  keyword = '',
  customer_id = '',
  warehouse_id = '',
  start_date = '',
  end_date = '',
  category_id = '',
}) {
  return `${URL}/report/warehouses/warehouse-inventories?keyword=${keyword}&start_date=${start_date}&end_date=${end_date}&customer_id=${customer_id}&warehouse_id=${warehouse_id}&per_page=999999&start=&category_id=${category_id}`
}

export function getUrlLowQuantity({
  keyword = '',
  warehouse_id = '',
  per_page = '',
  start = '',
}) {
  if (!start || start === '') start = '0'
  if (!per_page || per_page === '') per_page = '20'
  return `${URL}/report/warehouses/quantity-low-warehouse-report?keyword=${keyword}&warehouse_id=${warehouse_id}&per_page=${per_page}&start=${start}`
}

export function getUrlLowQuantityExcel({keyword = '', warehouse_id = ''}) {
  return `${URL}/report/warehouses/quantity-low-warehouse-report?keyword=${keyword}&warehouse_id=${warehouse_id}&per_page=9999999&start=`
}

export function getUrlTransfer({
  keyword = '',
  warehouse_transfer = '',
  warehouse_to_receive = '',
  per_page = '',
  start = '',
  start_date = '',
  end_date = '',
}) {
  if (!start || start === '') start = '0'
  if (!per_page || per_page === '') per_page = '20'
  return `${URL}/report/warehouses/transfer-report?keyword=${keyword}&start_date=${start_date}&end_date=${end_date}&warehouse_transfer=${warehouse_transfer}&warehouse_to_receive=${warehouse_to_receive}&per_page=${per_page}&start=${start}`
}

export function getUrlTransferExcel({
  keyword = '',
  warehouse_transfer = '',
  warehouse_to_receive = '',
  start_date = '',
  end_date = '',
}) {
  return `${URL}/report/warehouses/transfer-report?keyword=${keyword}&start_date=${start_date}&end_date=${end_date}&warehouse_transfer=${warehouse_transfer}&warehouse_to_receive=${warehouse_to_receive}&per_page=999999&start=`
}
// keyword=&warehouse_id=11&per_page&start
export function getUrlWarehouseStockReport({
  keyword = '',
  warehouse_id = '',
  per_page = '',
  start = '',
  start_date = '',
  end_date = '',
  category_id = '',
}) {
  if (!start || start === '') start = '0'
  if (!per_page || per_page === '') per_page = '20'
  return `${URL}/report/warehouses/stock-warehouse-report?keyword=${keyword}&start_date=${start_date}&end_date=${end_date}&warehouse_id=${warehouse_id}&per_page=${per_page}&start=${start}&category_id=${category_id}`
}

export function getUrlWarehouseStockReportExport({
  keyword = '',
  warehouse_id = '',
  start_date = '',
  end_date = '',
  category_id = '',
}) {
  return `${URL}/report/warehouses/export-stock-warehouse-report?keyword=${keyword}&start_date=${start_date}&end_date=${end_date}&warehouse_id=${warehouse_id}&category_id=${category_id}`
}

export function getUrlImport({
  keyword = '',
  warehouse_id = '',
  per_page = '',
  start = '',
  start_date = '',
  end_date = '',
  supplier_id = '',
}) {
  if (!start || start === '') start = '0'
  if (!per_page || per_page === '') per_page = '20'
  return `${URL}/report/purchases/purchase-report?keyword=${keyword}&start_date=${start_date}&end_date=${end_date}&warehouse_id=${warehouse_id}&per_page=${per_page}&start=${start}&supplier_id=${supplier_id}`
}

export function getUrlImportExcel({
  keyword = '',
  warehouse_id = '',
  start_date = '',
  end_date = '',
  supplier_id = '',
}) {
  return `${URL}/report/purchases/purchase-report?keyword=${keyword}&start_date=${start_date}&end_date=${end_date}&warehouse_id=${warehouse_id}&per_page=9999999&start=&supplier_id=${supplier_id}`
}

export function getUrlSaleByTime({
  keyword = '',
  warehouse_id = '',
  per_page = '',
  start = '',
  start_date = '',
  end_date = '',
  customer = '',
}) {
  if (!start || start === '') start = '0'
  if (!per_page || per_page === '') per_page = '20'
  return `${URL}/report/sales/orders-report?keyword=${keyword}&start_date=${start_date}&end_date=${end_date}&warehouse_id=${warehouse_id}&per_page=${per_page}&start=${start}&customer=${customer}`
}

export function getUrlSaleByTimeExcel({
  keyword = '',
  warehouse_id = '',
  start_date = '',
  end_date = '',
  customer = '',
}) {
  return `${URL}/report/sales/orders-report?keyword=${keyword}&start_date=${start_date}&end_date=${end_date}&warehouse_id=${warehouse_id}&per_page=9999999&start=&customer=${customer}`
}

export function getUrlSaleByProduct({
  keyword = '',
  per_page = '',
  start = '',
  start_date = '',
  end_date = '',
}) {
  if (!start || start === '') start = '0'
  if (!per_page || per_page === '') per_page = '20'
  return `${URL}/report/sales/product-sales-report?keyword=${keyword}&start_date=${start_date}&end_date=${end_date}&per_page=${per_page}&start=${start}`
}

export function getUrlSaleByProductExcel({
  keyword = '',
  start_date = '',
  end_date = '',
}) {
  return `${URL}/report/sales/product-sales-report?keyword=${keyword}&start_date=${start_date}&end_date=${end_date}&per_page=999999&start=`
}

export function getUrlSaleByEmployee({
  keyword = '',
  origin_id = '',
  start_date = '',
  end_date = '',
  staff_id = '',
  date_type = '',
}) {
  return `${URL}/report/sales/staff-sales-report?keyword=${keyword}&start_date=${start_date}&end_date=${end_date}&origin_id=${origin_id}&staff_id=${staff_id}&date_type=${date_type}`
}

export function getUrlSaleByOrder({
  origin_id = '',
  start_date = '',
  end_date = '',
  date_type = '',
}) {
  return `${URL}/report/sales/origin-sales-report?&start_date=${start_date}&end_date=${end_date}&origin_id=${origin_id}&date_type=${date_type}`
}

export function getUrlSaleByOrderExcel({
  origin_id = '',
  start_date = '',
  end_date = '',
  date_type = '',
}) {
  return `${URL}/report/sales/origin-sales-report?&start_date=${start_date}&end_date=${end_date}&origin_id=${origin_id}&date_type=${date_type}`
}

export function getUrlCustomer({...params}) {
  const {
    keyword = '',
    group = 0,
    city_id = 0,
    district_id = 0,
    ward_id = 0,
    per_page = 10,
    start = 0,
  } = params
  const url = `${URL}/customer/customers?keyword=${keyword}&group=${group}&city_id=${city_id}&district_id=${district_id}&ward_id=${ward_id}&per_page=${per_page}&start=${start}`
  return url
}
export function getUrlOrderDetail(order_id) {
  return `${URL}/order/detail/${order_id}`
}
export function getUrlProvinceDistrict() {
  return `${URL}/area/province-district`
}
export function getUrlProvince() {
  return `${URL}/area/provinces`
}
export function getUrlDistrict(city_id = '') {
  return `${URL}/area/districts?city_id=${city_id}`
}
export function getWardInfo(city_id = '', district_id = '') {
  return `${URL}/area/wards?city_id=${city_id}&district_id=${district_id}`
}
export function getUrlUpdateWarehouse(id) {
  return `${URL}/warehouse/update/${id}`
}
export function getUrlListProduct({
  keyword = '',
  category_id = '',
  product_id = '',
  warehouse_id = '',
  start = 0,
  per_page = '20',
  status = '',
}) {
  return `${URL}/product/products?keyword=${keyword}&category_id=${category_id}&product_id=${product_id}&status=${status}&warehouse_id=${warehouse_id}&per_page=${per_page}&start=${start}`
  // return `${URL}/product/products?keyword=${keyword}&category_id=${category_id}&product_id=${product_id}&status&warehouse_id=${warehouse_id}&per_page=${per_page}&${start}`;
}
export function getListShippingPartner() {
  return `${URL}/order/shipping/partner`
}
export function getUrlDetailProduct(id) {
  return `${URL}/product/detail/${id}`
}
export function getUrlAdress(keyword = '') {
  return `${URL}/setting/addresses?keyword=${keyword}`
}
export function getUrlDelivery(date_start = '', date_end = '') {
  return `${URL}/report/dashboard/delivery?date_start=${date_start}&date_end=${date_end}`
}
export function getUrlRevenue(date_start = '', date_end = '') {
  return `${URL}/report/dashboard/revenue?date_start=${date_start}&date_end=${date_end}`
}
export function getUrlCreateOrder() {
  return `${URL}/order/create`
}
export function getUrlShippingFee() {
  // return `https://api-dev.upos.vn/api/order/shipping/fee`;
  return `${URL}/order/shipping/fee`
}
export function getUrlDangerCustomer() {
  return `https://dev.upos.vn/corder/customer_danger`
}
export function getUrlCategory({...params}) {
  const {keyword = ''} = params
  return `${URL}/product/categories?keyword=${keyword}`
}
export function getUrlWarehouse({...params}) {
  const {keyword = '', is_purchase = ''} = params
  return `${URL}/warehouse/warehouses?keyword=${keyword}&is_purchase=${is_purchase}`
}

export function getUrlUnitList({...params}) {
  const {
    keyword = '',
    per_page = '50',
    start = '0',
  } = params
  return `${URL}/product/units?keyword=${keyword}&per_page=${per_page}&start=${start}`
}
export function getUrlUpdateStatus() {
  return `${URL}/order/update_status`
}
export function getUrlDeliveryBox1(params) {
  const {start_date = '', end_date = '', partner_ship = ''} = params || {}
  return `${URL}/report/delivery/delivery?partner_ship=${partner_ship}&date_start=${start_date}}&date_end=${end_date}`
}
export function getUrlSendLog(mess = '') {
  const token = '1613226593:AAHWouPrKsUYfM5y_l-ZSyKww9TA7I09yQ0'
  const chatId = '-1001436033026'
  const href = 'https://api.telegram.org/bot'
  const url = `${href + token}/sendMessage?chat_id=${chatId}&text=${mess}`
  return url
}
export function getUrldetectAddress(address) {
  // /area/detect-address
  return `${URL}/area/detect-address?address=${address}`
}
export function getUrlDetailsListAll({...props}) {
  const {
    keyword = '',
    category_id = '',
    product_id_details = '',
    status = '',
    warehouse_id = '',
    per_page = '20',
    start = '0',
  } = props
  return `${URL}/product/list-all-product-details?keyword=${keyword}&category_id=${category_id}&product_id_details=${product_id_details}&status=${status}&warehouse_id=${warehouse_id}&per_page=${per_page}&start=${start}`
}
export function getUrldetailList(id) {
  return `${URL}/product/product-details/${id}`
}
export function getUrlCreateCategory() {
  return `${URL}/product/category/create`
}
export function getUrlUpdateCategory(id) {
  return `${URL}/product/category/update/${id}`
}

export function getUrlStoreSetting() {
  return `${URL}/setting/config`
}
export function getUrlDeleteCategory(id) {
  return `${URL}/product/category/delete/${id}`
}
export function getUrlCreateUnit() {
  return `${URL}/product/unit/create`
}
export function getUrlUpdateUnit(id) {
  return `${URL}/product/unit/update/${id}`
}
export function getUrlDeleteUnit(id) {
  return `${URL}/product/unit/delete/${id}`
}
export function getUrlTransferWarehouse() {
  return `${URL}/warehouse/transfer`
}
export function getUrlCreateWarehouse() {
  return `${URL}/warehouse/create`
}
export function getUrlDeleteWarehouse(id) {
  return `${URL}/warehouse/delete/${id}`
}
export function getCreateInventoryControlTicket(id) {
  return `${URL}/warehouse/inventory/create`
}
export function getUrlInventoryControlList({...props}) {
  const {
    keyword = '',
    warehouse_id = '',
    status = '',
    start_date = '',
    end_date = '',
    start = '',
    per_page = '',
  } = props
  return `${URL}/warehouse/inventory/list?keyword=${keyword}&warehouse_id=${warehouse_id}&status=${status}&start_date=${start_date}&end_date=${end_date}&per_page=${per_page}&start=${start}`
}

export function getUrlDetailInventoryControlTicket(id) {
  return `${URL}/warehouse/inventory/detail/${id}`
}
export function getUrlDeleteICticket(id) {
  return `${URL}/warehouse/inventory/delete/${id}`
}
export function getUrlUpdateICticket(id) {
  return `${URL}/warehouse/inventory/update/${id}`
}
export function getUrlListSupplier({...props}) {
  const {keyword = '', per_page = '20', start = '0'} = props
  return `${URL}/supplier/suppliers?keyword=${keyword}&per_page=${per_page}&start=${start}`
}
export function getUrlUpdateSupplier(id) {
  return `${URL}/supplier/update/${id}`
}
export function getUrlCreateSupplier() {
  return `${URL}/supplier/create`
}
export function getUrlDeleteSupplier(id) {
  return `${URL}/supplier/delete/${id}`
}
// {{server}}/api/v2/supplier/purchase/137?start_date=2021-06-01&end_date=2021-07-01&keyword=abc&supplier_id=137&per_page=10&start=0
export function getUrlSupplierPurchase({...params}) {
  const {
    start_date = '',
    end_date = '',
    keyword = '',
    supplier_id = '',
    per_page = '20',
    start = '0',
  } = params
  return `${URL}/supplier/purchase/${supplier_id}?start_date=${start_date}&end_date=${end_date}&keyword=${keyword}&supplier_id=${supplier_id}&per_page=${per_page}&start=${start}`
}
export function getUrlDetailSupplier(id) {
  return `${URL}/supplier/detail/${id}`
}
export function getUrBalanceInventoryControl(id) {
  return `${URL}/warehouse/inventory/balance/${id}`
}
export function getUrUpdateStatusProduct(id) {
  return `${URL}/product/update-status`
}
