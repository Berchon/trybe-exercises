-- Usar a tabela criada pelo hr.sql
-- 1. Write a query to list the number of jobs available in the employees table.
SELECT COUNT(DISTINCT JOB_ID) FROM hr.employees;

-- 2. Write a query to get the total salaries payable to employees.
SELECT SUM(salary) FROM hr.employees;

-- 3. Write a query to get the minimum salary from employees table.
SELECT MIN(salary) FROM hr.employees;

-- 4. Write a query to get the maximum salary of an employee working as a Programmer.
SELECT MAX(salary) FROM hr.employees WHERE job_id = 'IT_PROG';

-- 5. Write a query to get the average salary and number of employees working the department 90.
SELECT AVG(salary), COUNT(*) FROM hr.employees WHERE department_id = 90;

-- 6. Write a query to get the highest, lowest, sum, and average salary of all employees.
SELECT MAX(salary), MIN(salary), SUM(salary), ROUND(AVG(salary), 2) FROM hr.employees;

-- 7. Write a query to get the number of employees with the same job.
SELECT job_id, COUNT(*) FROM hr.employees GROUP BY job_id;

-- 8. Write a query to get the difference between the highest and lowest salaries.
SELECT MAX(salary) - MIN(salary) FROM hr.employees;

-- 9. Write a query to find the manager ID and the salary of the lowest-paid employee for that manager.
SELECT manager_id, MIN(salary) FROM hr.employees GROUP BY manager_id; 

-- 10. Write a query to get the department ID and the total 12. Write a query to get the total salary, maximum, minimum, average salary of employees (job ID wise), for department ID 90 only.salary payable in each department. Go to the editor
SELECT department_id, SUM(salary) FROM hr.employees GROUP BY department_id;

-- 11. Write a query to get the average salary for each job ID excluding programmer.
SELECT job_id, AVG(salary) FROM hr.employees GROUP BY job_id HAVING job_id != 'IT_PROG';

-- 12. Write a query to get the total salary, maximum, minimum, average salary of employees (job ID wise), for department ID 90 only.
SELECT job_id, SUM(salary), MAX(salary), MIN(salary), AVG(salary) FROM hr.employees WHERE department_id = 90 GROUP BY job_id;

-- 13. Write a query to get the job ID and maximum salary of the employees where maximum salary is greater than or equal to $4000. 
SELECT job_id, MAX(salary) FROM hr.employees WHERE salary >= 4000 GROUP BY job_id;
-- OU
SELECT job_id, MAX(salary) FROM hr.employees GROUP BY job_id HAVING MAX(salary) >= 4000;

-- 14. Write a query to get the average salary for all departments employing more than 10 employees.
SELECT department_id, AVG(salary), COUNT(*)  FROM hr.employees GROUP BY department_id HAVING COUNT(*) > 10;
