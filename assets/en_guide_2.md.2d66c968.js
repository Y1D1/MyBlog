import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.48f6ae32.js";const d=JSON.parse('{"title":"SSM integration configuration actual combat","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/2.md","filePath":"en/guide/2.md"}'),l={name:"en/guide/2.md"},o=p(`<h1 id="ssm-integration-configuration-actual-combat" tabindex="-1">SSM integration configuration actual combat <a class="header-anchor" href="#ssm-integration-configuration-actual-combat" aria-label="Permalink to &quot;SSM integration configuration actual combat&quot;">​</a></h1><h2 id="_2-1-dependency-integration-and-addition" tabindex="-1">2.1 Dependency integration and addition <a class="header-anchor" href="#_2-1-dependency-integration-and-addition" aria-label="Permalink to &quot;2.1 Dependency integration and addition&quot;">​</a></h2><ol><li>Prepare the database</li></ol><p>Still use mybatis database test script!</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">CREATE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">DATABASE</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`mybatis-example\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">USE</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`mybatis-example\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">CREATE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">TABLE</span><span style="color:#E1E4E8;"> \`</span><span style="color:#B392F0;">t_emp</span><span style="color:#E1E4E8;">\`(</span></span>
<span class="line"><span style="color:#E1E4E8;">emp_id </span><span style="color:#F97583;">INT</span><span style="color:#E1E4E8;"> AUTO_INCREMENT,</span></span>
<span class="line"><span style="color:#E1E4E8;">emp_name </span><span style="color:#F97583;">CHAR</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">emp_salary DOUBLE(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#F97583;">PRIMARY KEY</span><span style="color:#E1E4E8;">(emp_id)</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">INSERT INTO</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;t_emp&#39;</span><span style="color:#E1E4E8;"> (emp_name,emp_salary) </span><span style="color:#F97583;">VALUES</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;tom&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">33</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">INSERT INTO</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;t_emp&#39;</span><span style="color:#E1E4E8;"> (emp_name,emp_salary) </span><span style="color:#F97583;">VALUES</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;jerry&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">666</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">66</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">INSERT INTO</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;t_emp&#39;</span><span style="color:#E1E4E8;"> (emp_name,emp_salary) </span><span style="color:#F97583;">VALUES</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;andy&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">777</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">77</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#9ECBFF;">\` \`</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">2. Prepare the project</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">part04-ssm-integration</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">Convert to a web project</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">3. Import dependencies</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">pom.xml</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">CREATE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">DATABASE</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`mybatis-example\`</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">USE</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`mybatis-example\`</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">CREATE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">TABLE</span><span style="color:#24292E;"> \`</span><span style="color:#6F42C1;">t_emp</span><span style="color:#24292E;">\`(</span></span>
<span class="line"><span style="color:#24292E;">emp_id </span><span style="color:#D73A49;">INT</span><span style="color:#24292E;"> AUTO_INCREMENT,</span></span>
<span class="line"><span style="color:#24292E;">emp_name </span><span style="color:#D73A49;">CHAR</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">emp_salary DOUBLE(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#D73A49;">PRIMARY KEY</span><span style="color:#24292E;">(emp_id)</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">INSERT INTO</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;t_emp&#39;</span><span style="color:#24292E;"> (emp_name,emp_salary) </span><span style="color:#D73A49;">VALUES</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;tom&quot;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">200</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">33</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">INSERT INTO</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;t_emp&#39;</span><span style="color:#24292E;"> (emp_name,emp_salary) </span><span style="color:#D73A49;">VALUES</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;jerry&quot;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">666</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">66</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">INSERT INTO</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;t_emp&#39;</span><span style="color:#24292E;"> (emp_name,emp_salary) </span><span style="color:#D73A49;">VALUES</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;andy&quot;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">777</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">77</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#032F62;">\` \`</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">2. Prepare the project</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">part04-ssm-integration</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">Convert to a web project</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">3. Import dependencies</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">pom.xml</span></span></code></pre></div>`,5),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const _=s(l,[["render",t]]);export{d as __pageData,_ as default};
