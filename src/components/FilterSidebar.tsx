import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { setCategory, setPriceRange, setSort } from "../store/productSlice";
import { Form, Button } from 'react-bootstrap';

const FilterSidebar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector((state: RootState) => state.products.filters);

  return (
    <Form className="border p-3 rounded">
      <Form.Label>دسته‌بندی</Form.Label>
      <Form.Select className="mb-2" value={filters.category} onChange={e=>dispatch(setCategory(e.target.value))}>
        <option value="all">همه</option>
        <option value="mobile">موبایل</option>
        <option value="laptop">لپ‌تاپ</option>
        <option value="accessory">لوازم جانبی</option>
      </Form.Select>

      <Form.Label>مرتب‌سازی</Form.Label>
      <Form.Select className="mb-2" value={filters.sort} onChange={e=>dispatch(setSort(e.target.value))}>
        <option value="default">پیش‌فرض</option>
        <option value="cheap">ارزان‌ترین</option>
        <option value="expensive">گران‌ترین</option>
      </Form.Select>

      <Form.Label>حداقل قیمت</Form.Label>
      <Form.Control type="number" className="mb-2" onChange={e=>dispatch(setPriceRange({min:+e.target.value,max:filters.maxPrice}))}/>

      <Form.Label>حداکثر قیمت</Form.Label>
      <Form.Control type="number" onChange={e=>dispatch(setPriceRange({min:filters.minPrice,max:+e.target.value}))}/>
    </Form>
  );
};

export default FilterSidebar;
