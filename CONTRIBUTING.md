# Contribution Guidelines

Contributions to this Module are very welcome! We follow a fairly standard [pull request process](https://help.github.com/articles/about-pull-requests/) for contributions, subject to the following guidelines:

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Update the documentation](#update-the-documentation)
- [Update the tests](#update-the-tests)
- [Update the code](#update-the-code)
  - [Backwards compatibility](#backwards-compatibility)
  - [Downtime](#downtime)
  - [Formatting](#formatting)
- [Create a pull request](#create-a-pull-request)
- [Merge and release](#merge-and-release)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Update the documentation

We recommend updating the documentation *before* updating any code (see [Readme Driven Development](http://tom.preston-werner.com/2010/08/23/readme-driven-development.html)). This ensures the documentation stays up to date and allows you to think through the problem at a high level before you get lost in the weeds of coding.

## Update the tests

We also recommend updating the automated tests *before* updating any code (see [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development)). That means you add or update a test case, verify that it's failing with a clear error message, and *then* make the code changes to get that test to pass. This ensures the tests stay up to date and verify all the functionality in this Module, including whatever new functionality you're adding in your contribution. Check out the test folder for instructions on running the automated tests.

## Update the code

At this point, make your code changes and use your new test case to verify that everything is working. As you work, keep in mind two things:

- Backwards compatibility
- Downtime

### Backwards compatibility

Please make every effort to avoid unnecessary backwards incompatible changes. With Terraform code, this means:

- Do not delete, rename, or change the type of input variables.
- If you add an input variable, keep in mind to set a reasonable `default` if possible.
- Do not delete, rename, or change the type of output variables.
- Do not delete or rename a module in the `modules` folder.

If a backwards incompatible change cannot be avoided, please make sure to call that out when you submit a pull request, explaining why the change is absolutely necessary.

### Downtime

Bear in mind that the Terraform code in this Module is used by real companies to run real infrastructure in production, and certain types of changes could cause downtime. For example, consider the following:

- If you rename a resource (e.g. `gcp_instance "foo"` -> `gcp_instance "bar"`), Terraform will see that as deleting the old resource and creating a new one.
- If you change certain attributes of a resource (e.g. the `name` of an `gcp lb`), the cloud provider (e.g. GCP) may treat that as an instruction to delete the old resource and create a new one.

Deleting certain types of resources (e.g. virtual servers, load balancers) can cause downtime, so when making code changes, think carefully about how to avoid that. For example, can you avoid downtime by using [create_before_destroy](https://www.terraform.io/docs/configuration/resources.html#create_before_destroy)? Or via the `terraform state` command? If so, make sure to note this in our pull request. If  downtime cannot be avoided, please make sure to call that out when you submit a pull request.

### Formatting

Terraform is equipped with an hcl formatter. When you are contributing to this module or you are contributing your own module, run `terraform fmt` first. Contributions which are not formatted, wont be accepted.

## Create a pull request

[Create a pull request](https://help.github.com/articles/creating-a-pull-request/) with your changes. Please make sure to include the following:

- A description of the change, including a link to your Jira issue.
- The output of your test run with the changes, preferably in a [GitHub Gist](https://gist.github.com/).
- Any notes on backwards incompatibility or downtime.

## Merge and release

The maintainers for this repo will review your code and provide feedback. If everything looks good, they will merge the code and release a new version, which you'll be able to find in the [releases page](../../releases).
