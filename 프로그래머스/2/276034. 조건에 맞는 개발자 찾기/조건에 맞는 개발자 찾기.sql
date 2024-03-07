select distinct d.id, d.email, d.first_name, d.last_name
from skillcodes s, developers d
where (d.skill_code & s.code)>0 and
    s.name in ('Python', 'C#') 
order by d.id