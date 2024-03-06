select category, sum(s.sales) as total_sales
from book b, book_sales s
where b.book_id=s.book_id and sales_date between '2022-01-01' and '2022-01-31'
group by category
order by category